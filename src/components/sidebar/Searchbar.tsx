import { Input } from "@/core-ui/Input";

interface SearchBarProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
	return (
		<Input
			placeholder="Search for a city..."
			value={value}
			onChange={onChange}
		/>
	);
} 