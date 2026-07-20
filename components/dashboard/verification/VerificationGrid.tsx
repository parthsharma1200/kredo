import VerificationCard from "./VerificationCard";
import { verification } from "../../../constants/verification";

export default function VerificationGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {verification.map((item) => (
        <VerificationCard
          key={item.id}
          title={item.title}
          category={item.category}
          status={item.status}
          submitted={item.submitted}
          trust={item.trust}
          icon={item.icon}
        />
      ))}
    </div>
  );
}