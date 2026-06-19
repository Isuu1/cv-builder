import PersonalDetailsForm from "./_components/PersonalDetailsForm";
import PreviewPanel from "./_components/PreviewPanel";

export default function Page() {
  return (
    <div className="w-full h-full grid-cols-2 grid gap-4 p-10">
      <section className="flex flex-col gap-4 bg-card rounded-2xl p-4">
        <h4>Resume Builder</h4>
        <PersonalDetailsForm />
      </section>
      <section className="flex flex-col gap-4 bg-card rounded-2xl p-4">
        <h4>Resume Preview</h4>
        <PreviewPanel />
      </section>
    </div>
  );
}
