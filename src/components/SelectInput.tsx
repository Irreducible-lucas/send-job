import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/select";
import { GeneralList } from "../type";

type Props = {
  title: string;
  data: GeneralList[];
  setSelectedValue: (val: string) => void;
};

const SelectInput = ({ title, data, setSelectedValue }: Props) => {
  const handleValueChange = (value: string) => {
    console.log(value); // Console the value of the selected item
    setSelectedValue(value);
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-full h-full focus:ring-none">
        <SelectValue placeholder={title} className="text-lightgrey" />
      </SelectTrigger>
      <SelectContent>
        {data.map((item: GeneralList) => (
          <SelectItem key={item.id} value={item.id.toString()}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
