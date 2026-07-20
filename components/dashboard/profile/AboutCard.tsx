import Card from "@/components/ui/Card";

export default function AboutCard() {
  return (
    <Card className="p-8">

      <h2 className="text-2xl font-bold text-gray-900">
        About Me
      </h2>

      <p className="mt-4 leading-8 text-gray-600">
        Passionate Computer Science student focused on
        Full Stack Development, Artificial Intelligence
        and building software that solves real-world
        problems.

        <br />
        <br />

        I enjoy creating modern web applications,
        participating in hackathons and continuously
        improving my technical skills.
      </p>

    </Card>
  );
}