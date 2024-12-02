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
        
          label: "16x12",
          value: "medium",
          price: 6_00,

      },
      {
          label: "20x16",
          value: "large",

          price: 8_00,

      },

      {
          label: "40x30",
          value: "xl",
          price: 10_00,

      },


      
    
    ]

    } as const