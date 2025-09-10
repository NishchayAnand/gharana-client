
Using Form Component from Shadcn allowed us to leverage react-hook-form to implicitly manage all search parameters for hotel search form. The react-hook-form will handle the state management of all input paramaters, collate them as a single object and pass it to the form submit handler. 

When the user searches hotels, we want the frontend to nagivate to the SearchPage, display a loading state while the frontend gets list of available hotels and then finally update the SearchPage to display all the fetched hotels.