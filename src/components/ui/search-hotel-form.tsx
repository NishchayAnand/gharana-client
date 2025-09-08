"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckInDatePicker } from "@/components/ui/check-in-date-picker";
import { CheckOutDatePicker } from "@/components/ui/check-out-date-picker";

export function SearchHotelForm() {
    return (
    <Card>

        <CardHeader>
            <CardTitle>Search Hotels</CardTitle>
        </CardHeader>

        <CardContent>
            <form className="flex justify-center items-center gap-4">
                
                {/* Destination */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input id="destination" type="text" placeholder="Enter destination" />
                </div>

                {/* Check-in Date */}
                <CheckInDatePicker/>

                {/* Check-out Date */}
                <CheckOutDatePicker />
                
                {/* Number of Rooms */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="rooms">Number of Rooms</Label>
                    <Input id="rooms" type="number" min="1" placeholder="Enter number of rooms" />
                </div>

                {/* Number of Guests */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input id="guests" type="number" min="1" placeholder="Enter number of guests" />
                </div>

                {/* Search Button */}
                <Button type="submit" className="h-16 w-48">Search</Button>
                
            </form>
        </CardContent>
        
    </Card>
);
}