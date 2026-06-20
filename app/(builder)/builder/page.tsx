import PersonalDetailsForm from "./_components/PersonalDetailsForm";
import PreviewPanel from "./_components/PreviewPanel";

export default function Page() {
  return (
    <div className="w-full grid-cols-2 grid gap-4 p-10 h-screen overflow-hidden">
      <section>
        <PersonalDetailsForm />
      </section>
      <section className="bg-card rounded-2xl overflow-y-auto">
        <PreviewPanel />
      </section>
    </div>
  );
}
