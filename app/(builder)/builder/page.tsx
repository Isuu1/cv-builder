import FormPanel from "./_components/FormPanel";
import PreviewPanel from "./_components/PreviewPanel";

export default function Page() {
  return (
    <div className="w-full h-full grid-cols-2 grid gap-4">
      <section className="flex flex-col gap-4 items-center">
        <h3>Resume Builder</h3>
        <FormPanel />
      </section>
      <section className="flex flex-col gap-4 items-center">
        <h3>Resume Preview</h3>
        <PreviewPanel />
      </section>
    </div>
  );
}
