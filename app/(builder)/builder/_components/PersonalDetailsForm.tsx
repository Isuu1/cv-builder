"use client";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useCvStore } from "@/store/useCvStore";

const PersonalDetailsForm = () => {
  const { fullName, email, title } = useCvStore(
    (state) => state.data.personalInfo,
  );

  const updatePersonalInfo = useCvStore((state) => state.updatePersonalInfo);

  return (
    <FieldSet>
      <FieldLegend>Personal Details</FieldLegend>
      <FieldGroup className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
          />
        </Field>
      </FieldGroup>
      <Field>
        <FieldLabel>Title</FieldLabel>
        <Input
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => updatePersonalInfo("title", e.target.value)}
        />
      </Field>
    </FieldSet>
  );
};

export default PersonalDetailsForm;
