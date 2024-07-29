"use client"

import { Button, Input } from "@material-tailwind/react"



function Search(){
    return(
        <div className="relative flex w-full gap-2 ">
        <Input
          type="search"
          color="black"
          label="Search here..."
          className="pr-20"
          containerProps={{
            className: "min-w-[288px]",
          }}
        />
        <Button
          size="sm"
          color="white"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    )
}

export default Search