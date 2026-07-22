"use client";

import Card from "../ui/Card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  TrendingUp,
  ShieldCheck,
  Target,
} from "lucide-react";

const data = [
  { month: "Jan", score: 52 },
  { month: "Feb", score: 58 },
  { month: "Mar", score: 63 },
  { month: "Apr", score: 61 },
  { month: "May", score: 70 },
  { month: "Jun", score: 78 },
];

export default function TrustChart() {
  const currentScore = data[data.length - 1].score;
  const improvement = currentScore - data[0].score;

  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Trust Score Analytics
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Your trust growth over the last 6 months.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl bg-green-50 px-5 py-3">
              <p className="text-xs font-semibold uppercase text-green-600">
                Growth
              </p>

              <p className="text-2xl font-bold text-green-700">
                +{improvement}
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 px-5 py-3">
              <p className="text-xs font-semibold uppercase text-blue-600">
                Current
              </p>

              <p className="text-2xl font-bold text-blue-700">
                {currentScore}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-80 px-4 pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="trustFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2563EB"
                  stopOpacity={0.35}
                />
                <stop
                  offset="100%"
                  stopColor="#2563EB"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[40, 100]}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "none",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.12)",
              }}
            />

            <Area
              type="monotone"
              dataKey="score"
              stroke="#2563EB"
              strokeWidth={4}
              fill="url(#trustFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid gap-4 border-t border-slate-100 p-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-5">
          <TrendingUp className="mb-3 h-6 w-6 text-green-600" />

          <p className="text-3xl font-bold text-slate-900">
            +{improvement}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Trust Points Gained
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <ShieldCheck className="mb-3 h-6 w-6 text-blue-600" />

          <p className="text-3xl font-bold text-slate-900">
            78%
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Profile Strength
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <Target className="mb-3 h-6 w-6 text-purple-600" />

          <p className="text-3xl font-bold text-slate-900">
            80
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Next Target
          </p>
        </div>
      </div>
    </Card>
  );
}