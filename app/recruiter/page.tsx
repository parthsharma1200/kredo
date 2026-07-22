"use client";

import { useEffect, useMemo, useState } from "react";

import RoleGuard from "@/components/auth/RoleGuard";
import { getSavedCandidates } from "@/services/recruiter.services";
import RecruiterHero from "@/components/recruiter/RecruiterHero";
import RecruiterStats from "@/components/recruiter/RecruiterStats";
import SearchBar from "@/components/recruiter/SearchBar";
import TrustFilter from "@/components/recruiter/TrustFilter";
import SkillsFilter from "@/components/recruiter/SkillsFilter";
import SortDropdown from "@/components/recruiter/SortDropdown";
import CandidateCard from "@/components/recruiter/CandidateCard";
import CandidateCardSkeleton from "@/components/recruiter/CandidateCardSkeleton";
import { useStudents } from "@/hooks/useStudents";
import { SearchX } from "lucide-react";
import EmptyState from "@/components/ui/EmptyState";
function RecruiterDashboardContent() {
  const [search, setSearch] = useState("");
  const [minTrust, setMinTrust] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [sortBy, setSortBy] = useState("trust");
const [savedCount, setSavedCount] = useState(0);
  const { students, loading } = useStudents();
useEffect(() => {
  async function loadSavedCount() {
    try {
      const saved = await getSavedCandidates();
      setSavedCount(saved.length);
    } catch (error) {
      console.error(error);
    }
  }

  loadSavedCount();
}, []);
  const availableSkills = useMemo(() => {
    const skills = new Set<string>();

    students.forEach((student) => {
      (student.skills ?? []).forEach((skill) => {
        skills.add(skill);
      });
    });

    return Array.from(skills).sort();
  }, [students]);

  const filteredStudents = useMemo(() => {
    const query = search.toLowerCase();

    const filtered = students.filter((student) => {
      const matchesSearch =
        student.full_name?.toLowerCase().includes(query) ||
        student.username?.toLowerCase().includes(query) ||
        student.university?.toLowerCase().includes(query) ||
        (student.skills ?? []).some((skill) =>
          skill.toLowerCase().includes(query)
        );

      const matchesTrust =
        student.trust_score >= minTrust;

      const matchesSkill =
        selectedSkill === "" ||
        (student.skills ?? []).includes(selectedSkill);

    
return (
        matchesSearch &&
        matchesTrust &&
        matchesSkill
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
          (a, b) =>
            b.trust_score - a.trust_score
        );
    }

    return filtered;
  }, [
    students,
    search,
    minTrust,
    selectedSkill,
    sortBy,
  ]);

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Hero */}
        <RecruiterHero />

        {/* Stats */}
        <section className="mt-8">
          <RecruiterStats
  students={students}
  savedCount={savedCount}
/>
        </section>

        {/* Filter Panel */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold text-gray-900">
            Find Candidates
          </h2>

          <p className="mt-1 text-gray-500">
            Search and filter verified student profiles.
          </p>

          <div className="mt-6">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          <div className="mt-6">
            <TrustFilter
              value={minTrust}
              onChange={setMinTrust}
            />
          </div>

          <div className="mt-6">
            <SkillsFilter
              skills={availableSkills}
              selected={selectedSkill}
              onChange={setSelectedSkill}
            />
          </div>

        </section>

        {/* Candidate Header */}
        <section className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Candidates
            </h2>

            <p className="mt-1 text-gray-500">
              Showing
              <span className="mx-1 font-bold text-blue-600">
                {filteredStudents.length}
              </span>
              of
              <span className="mx-1 font-bold">
                {students.length}
              </span>
              verified students
            </p>
          </div>

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />

        </section>

        {/* Candidate Grid */}
        <section className="mt-8">
  {loading ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {Array.from({ length: 6 }).map((_, index) => (
    <CandidateCardSkeleton key={index} />
  ))}
</div>
          ) : filteredStudents.length === 0 ? (
  <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">

    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
      <SearchX className="h-8 w-8 text-blue-600" />
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-900">
      No matching candidates
    </h3>

    <p className="mx-auto mt-3 max-w-md text-slate-500">
      Try lowering the minimum trust score or changing your search keywords.
    </p>

  </div>
)
           : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredStudents.map((student) => (
                <CandidateCard
                  key={student.id}
                  profile={student}
                />
              ))}
            </div>
          )}

        </section>

      </div>
    </main>
  );
}

export default function RecruiterDashboardPage() {
  return (
    <RoleGuard allow={["recruiter", "admin"]}>
      <RecruiterDashboardContent />
    </RoleGuard>
  );
}