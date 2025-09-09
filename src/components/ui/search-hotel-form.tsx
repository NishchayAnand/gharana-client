"use client"

import { useState } from "react";
import { Check, ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import { Command, CommandList, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";


const destinations = [
    { label: "Manali", value: "manali" },
    { label: "Jaipur", value: "jaipur" },
    { label: "Udaipur", value: "udaipur" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Kerala", value: "kerala" }
];

export function SearchHotelForm() {
    const [destination, setDestination] = useState("");
    const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date());
    const [checkOutDate, setCheckoutDate] = useState<Date | undefined>(new Date());
    const [rooms, setRooms] = useState(1);

    return (
    <Card>

        <CardHeader>
            <CardTitle>Search Hotels</CardTitle>
        </CardHeader>

        <CardContent>
            <form className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:flex-wrap">
                
                {/* Destination */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" id="destination" className="w-48 justify-between font-normal">
                                {destination 
                                    ? destinations.find(dest => dest.value === destination)?.label 
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
                                                onSelect={(currentDestination) => setDestination(currentDestination === destination ? "" : currentDestination)}
                                            >
                                                {dest.label}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        destination === dest.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>

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
        </CardContent>
        
    </Card>
);
}