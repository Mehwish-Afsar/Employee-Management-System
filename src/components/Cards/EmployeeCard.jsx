import React from "react";

const STATS = [
    { key: "newTask", label: "New", color: "indigo" },
    { key: "active", label: "Accepted", color: "amber" },
    { key: "completed", label: "Completed", color: "emerald" },
    { key: "failed", label: "Failed", color: "rose" },
];

// Every class each status needs is spelled out in full below — Tailwind's
// compiler only generates CSS for class names it can literally see in the
// source. Building a name at runtime (e.g. "bg-" + color, or
// .replace('text-', 'bg-')) produces a string Tailwind never scans, so
// that utility silently never gets generated. That was the bug: the
// New/Accepted/Failed dots had no color because "bg-indigo-400" etc.
// didn't exist anywhere as a literal string for Tailwind to find.
const COLOR_CLASSES = {
    indigo: { text: "text-indigo-400", ring: "ring-indigo-400/20", bg: "bg-indigo-400/10", dot: "bg-indigo-400" },
    amber: { text: "text-amber-400", ring: "ring-amber-400/20", bg: "bg-amber-400/10", dot: "bg-amber-400" },
    emerald: { text: "text-emerald-400", ring: "ring-emerald-400/20", bg: "bg-emerald-400/10", dot: "bg-emerald-400" },
    rose: { text: "text-rose-400", ring: "ring-rose-400/20", bg: "bg-rose-400/10", dot: "bg-rose-400" },
};

const EmployeeCard = ({ data }) => {
    return (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => {
                const c = COLOR_CLASSES[stat.color];
                return (
                    <div
                        key={stat.key}
                        className={`rounded-2xl border border-white/10 bg-[#12151B] p-5 ring-1 ${c.ring} transition hover:border-white/20`}
                    >
                        <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ${c.bg}`}>
                            <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`}></span>
                        </div>
                        <h1 className={`text-3xl font-bold ${c.text}`}>{data.taskCount[stat.key]}</h1>
                        <p className="mt-1 text-sm font-medium text-white/50">{stat.label}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default EmployeeCard;