import PersonalDetailsForm from "./_components/PersonalDetailsForm";
import PreviewPanel from "./_components/PreviewPanel";

export default function Page() {
  return (
    <div className="w-full h-full grid-cols-2 grid gap-4 p-10">
      <section className="flex flex-col gap-4 bg-card rounded-lg p-4">
        <h3>Resume Builder</h3>
        <PersonalDetailsForm />
      </section>
      <section className="flex flex-col gap-4 items-center">
        <h3>Resume Preview</h3>
        <PreviewPanel />
      </section>
    </div>
  );
}
