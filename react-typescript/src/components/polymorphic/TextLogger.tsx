import { Text } from "./Text";

export default function TextLogger() {
    return (
        <div>
            {/* <Text as='h1' size="lg" htmlFor='someId'>Head</Text> */}
            <Text as='p' size="md">Para</Text>
            <Text as='label' size="sm" htmlFor='someId'>Label</Text>
        </div>
    )
}
