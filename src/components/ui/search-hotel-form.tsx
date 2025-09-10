"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import { Command, CommandList, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Sample destinations
const destinations = [
    { label: "Manali", value: "manali" },
    { label: "Jaipur", value: "jaipur" },
    { label: "Udaipur", value: "udaipur" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Kerala", value: "kerala" }
];

// Interface for form values
type FormValues = {
    destination: string;
    checkInDate: Date | undefined;
    checkOutDate: Date | undefined;
};

export function SearchHotelForm() {
    const form = useForm<FormValues>({
        defaultValues: {
            destination: "",
            checkInDate: undefined,
            checkOutDate: undefined
        }
    });

    function onSubmit(data: FormValues) {
        // handle form submission
        console.log(data);
    }

    return (
    <Card>

        <CardHeader>
            <CardTitle>Search Hotels</CardTitle>
        </CardHeader>

        <CardContent>
            <Form {...form}>           
                <form
                    onSubmit={form.handleSubmit(onSubmit)}   
                    className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:flex-wrap"
                >                    
                    {/* Destination */}
                    <FormField
                        name="destination"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-2">
                                <FormLabel>Destination</FormLabel>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-48 justify-between font-normal">
                                                {field.value 
                                                    ? destinations.find(dest => dest.value === field.value)?.label 
                                                    : "Select destination"
                                                }
                                                <ChevronDownIcon />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                            <Command>
                                                <CommandInput placeholder="Search Destination..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>No Destination found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {destinations.map((dest) => (
                                                            <CommandItem
                                                                key={dest.value}
                                                                value={dest.value}
                                                                onSelect={(currentDestination) => {
                                                                    // set the form field value
                                                                    field.onChange(currentDestination)
                                                                }}
                                                            >
                                                                {dest.label}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto",
                                                                        field.value === dest.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Check-in Date */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="checkindate">Check-In Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" id="checkindate" className="w-48 justify-between font-normal">
                                    { checkInDate ? checkInDate.toLocaleDateString() : "Select date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={checkInDate}
                                    captionLayout="dropdown"
                                    onSelect={setCheckInDate}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Check-out Date */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="checkoutdate">Check-Out Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" id="checkoutdate" className="w-48 justify-between font-normal">
                                    { checkOutDate ? checkOutDate.toLocaleDateString() : "Select date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={checkOutDate}
                                    captionLayout="dropdown"
                                    onSelect={setCheckoutDate}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Search Button */}
                    <Button type="submit" className="w-48 mt-auto">Search</Button>
                    
                </form>
            </Form>
        </CardContent>
        
    </Card>
);
}