import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { healthStats } from "../data/healthStats";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Understanding Menstrual Health</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Health Impact Statistics in India</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={healthStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="issue" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" fill="#9333ea" name="Percentage of Users Affected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Switch to Sustainable Options?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Made from medical-grade materials</li>
                <li>No harmful chemicals or dyes</li>
                <li>Reduced risk of infections</li>
                <li>Better for sensitive skin</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Reduce plastic waste by 99%</li>
                <li>One cup replaces 3000+ disposable products</li>
                <li>Lower carbon footprint</li>
                <li>Sustainable production methods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
