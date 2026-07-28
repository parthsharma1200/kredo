"use client";

import { useEffect, useMemo, useState } from "react";

import RoleGuard from "@/components/auth/RoleGuard";

import RecruiterHero from "@/components/recruiters/RecruiterHero";
import RecruiterStats from "@/components/recruiters/RecruiterStats";
import SearchBar from "@/components/recruiters/SearchBar";
import SkillsFilter from "@/components/recruiters/SkillsFilter";
import TrustFilter from "@/components/recruiters/TrustFilter";
import SortDropdown from "@/components/recruiters/SortDropdown";
import CandidateCard from "@/components/recruiters/CandidateCard";

import { useDebounce } from "@/hooks/useDebounce";
import { useStudents } from "@/hooks/useStudents";
import { getSavedCandidates } from "@/services/recruiter.services";

function RecruiterDashboardContent() {
  const { students, loading } = useStudents();

  const [savedCount, setSavedCount] = useState(0);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [selectedSkill, setSelectedSkill] = useState("");
  const [minimumTrust, setMinimumTrust] = useState(0);
  const [sortBy, setSortBy] = useState("trust");

  useEffect(() => {
    async function loadSaved() {
      const saved = await getSavedCandidates();
      setSavedCount(saved.length);
    }

    loadSaved();
  }, []);

  const allSkills = useMemo(() => {
    return Array.from(
      new Set(
        students.flatMap((student) => student.skills ?? [])
      )
    ).sort();
  }, [students]);

  const filteredStudents = useMemo(() => {
    const query = debouncedSearch.toLowerCase();

    const filtered = students.filter((student) => {
      const matchesSearch =
        student.full_name.toLowerCase().includes(query) ||
        student.username.toLowerCase().includes(query) ||
        (student.university ?? "")
          .toLowerCase()
          .includes(query) ||
        (student.skills ?? []).some((skill) =>
          skill.toLowerCase().includes(query)
        );

      const matchesSkill =
        !selectedSkill ||
        (student.skills ?? []).includes(selectedSkill);

      const matchesTrust =
        student.trust_score >= minimumTrust;

      return (
        matchesSearch &&
        matchesSkill &&
        matchesTrust
      );
    });

    switch (sortBy) {
      case "name":
        filtered.sort((a, b) =>
          a.full_name.localeCompare(b.full_name)
        );
        break;

      case "university":
        filtered.sort((a, b) =>
          (a.university ?? "").localeCompare(
            b.university ?? ""
          )
        );
        break;

      default:
        filtered.sort(
          (a, b) => b.trust_score - a.trust_score
        );
    }

    return filtered;
  }, [
    students,
    debouncedSearch,
    selectedSkill,
    minimumTrust,
    sortBy,
  ]);

  return (
    <div className="space-y-8">
      <RecruiterHero />

      <RecruiterStats
        students={students}
        savedCount={savedCount}
      />

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <SkillsFilter
          skills={allSkills}
          selected={selectedSkill}
          onChange={setSelectedSkill}
        />

        <TrustFilter
          value={minimumTrust}
          onChange={setMinimumTrust}
        />

        <div className="flex justify-end">
          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-500">
          Loading students...
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 py-20 text-center">
          <h2 className="text-2xl font-bold">
            No students found
          </h2>

          <p className="mt-2 text-slate-500">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredStudents.map((student) => (
            <CandidateCard
              key={student.id}
              profile={student}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RecruiterDashboardPage() {
  return (
    <RoleGuard allow={["recruiter", "admin"]}>
      <RecruiterDashboardContent />
    </RoleGuard>
  );
}