export const COLORS = [
    {
        label: "White",
        value: "white",
        tw: "white"

    },
    {
        label: "Light gray",
        value: "lightgray",
        tw: "stone-200"

    },
    {
        label: "Dark gray",
        value: "darkgray",
        tw: "stone-400"

    }

] as const


export const MODELS = {
     
  name: "models",
      options: [
        {
        
          label: "16/12",
          value: "medium",
          price: 6_00,
          ratio: 16 / 12

      },
      {
          label: "20/16",
          value: "large",

          price: 8_00,
          ratio: 20 /16

      },

      {
          label: "40/30",
          value: "xl",
          price: 10_00,
          ratio: 40/30

      },

      {
        label: "12/16",
        value: "xl",
        price: 10_00,
        ratio: 12/16

    },


      
    
    ]

    } as const