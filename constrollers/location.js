const db = require("../models/db");

exports.addlocation = async (req , res , next) => {
    try{

        const {provinces, amphures, districts, zip_code, road, village , house_number, other ,usersId}= req.body
        const newLocation = await db.location.create({
            data: {
                provinces,
                amphures,
                districts,
                zip_code: parseInt(zip_code),
                road,
                village,
                house_number,
                other,
                usersId,
            }
        })
        res.json(newLocation)
    }catch(error){
        next(error);
    }
}

exports.getlocationsbyuser = async (req , res , next) => {
    try{
        const locations = await db.location.findMany({
            where: {
                // usersId: req.params.userId
                usersId: req.user.id,
            }
        })
        res.json(locations)
    }catch(error){
        next(error);
    }
}

exports.editlocations = async (req, res) => {
    try {
      const { id } = req.params;  // Get the id from the URL parameter
      const { provinces, amphures, districts, zip_code, road, village, house_number, other } = req.body;
  
      if (!id) {
        return res.status(400).json({ error: 'Location ID is required.' });
      }
  
      const location = await db.location.update({
        where: { id },
        data: {
          provinces,
          amphures,
          districts,
          zip_code: parseInt(zip_code, 10),  // Ensure zip code is a number
          road,
          village,
          house_number,
          other,
        },
      });
  
      return res.json(location);
    } catch (error) {
      console.error('Error updating location:', error);
      return res.status(500).json({ error: 'Failed to update location.' });
    }
  };


// exports.editlocations = async (req, res, next) => {
//     try {
//       const { id, provinces, amphures, districts, zip_code, road, village, house_number, other } = req.body;
  
//       if (!id) {
//         return res.status(400).json({ error: 'Location ID is required.' });
//       }
  
//       const location = await db.location.update({
//         where: { id },
//         data: {
//           provinces,
//           amphures,
//           districts,
//           zip_code: parseInt(zip_code, 10),  // Ensure zip code is a number
//           road,
//           village,
//           house_number,
//           other,
//         },
//       });
  
//       res.json(location);
//     } catch (error) {
//       console.error('Error updating location:', error);
//       res.status(500).json({ error: 'Failed to update location.' });
//       next(error);
//     }
//   };

// exports.editlocations = async (req , res , next) =>{
//     try{
//         const {id, provinces, amphures, districts, zip_code, road, village, house_number, other } = req.body
//         const location = await db.location.update({
//             where: {
//                 id: id,
//             },
//             data: {
//                 provinces,
//                 amphures,
//                 districts,
//                 zip_code: parseInt(zip_code),
//                 road,
//                 village,
//                 house_number,
//                 other,
//             }
//         })
//         res.json(location)
//     }catch(error){
//         next(error);
//     }
// }

// exports.editlocations = async (req, res, next) => {
//     try {
//         const { id, provinces, amphures, districts, zip_code, road, village, house_number, other } = req.body;

//         // Check if ID is provided
//         if (!id) {
//             return res.status(400).json({ error: 'ID is required to update the location.' });
//         }

//         console.log('Updating location with ID:', id);

//         const location = await db.location.update({
//             where: {
//                 id: id, // Ensure id is defined and matches a record
//             },
//             data: {
//                 provinces,
//                 amphures,
//                 districts,
//                 zip_code: parseInt(zip_code), // Ensure zip_code is a number
//                 road,
//                 village,
//                 house_number,
//                 other,
//             }
//         });

//         res.json(location);
//     } catch (error) {
//         console.error('Error updating location:', error);
//         next(error);
//     }
// };
