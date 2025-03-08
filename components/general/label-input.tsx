import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface LabelInputProps {
  labelText: string;
  placeholder: string;
  name: string;
  id: string;
  textarea?: boolean;
  required?: boolean;
}

const LabelInput = ({
  textarea = false,
  required = true,
  labelText,
  ...props
}: LabelInputProps) => {
  return (
    <div>
      <Label>{labelText}</Label>
      {textarea ? (
        <Textarea {...props} required={required} />
      ) : (
        <Input {...props} required={required} />
      )}
    </div>
  );
};

export default LabelInput;
