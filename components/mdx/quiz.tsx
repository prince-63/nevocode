"use client";

import { useState } from "react";
import { Button, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, Card, CardContent, Typography } from "@mui/material";

interface QuizProps {
    question: string;
    options: Record<string, string>;
    answer: string;
}

const Quiz: React.FC<QuizProps> = ({ question, options, answer }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleSubmit = () => {
        setIsCorrect(selected === answer);
    };

    return (
        <Card className="p-2 border bg-gray-50 rounded-sm shadow-sm">
            <CardContent className="flex flex-col w-full">
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                        <Typography variant="h6" className="font-bold pb-2">{question}</Typography>
                    </FormLabel>
                    <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
                        {Object.entries(options).map(([key, value]) => (
                            <FormControlLabel key={key} value={key} control={<Radio />} label={value} />
                        ))}
                    </RadioGroup>
                </FormControl>
                <Button
                    variant="outlined"
                    color="primary"
                    className="py-2 px-4 w-max bg-green-500 mt-2"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                {isCorrect !== null && (
                    <Typography className={`mt-2 font-bold ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                        {isCorrect ? "Correct! 🎉" : "Incorrect! Try again."}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default Quiz;