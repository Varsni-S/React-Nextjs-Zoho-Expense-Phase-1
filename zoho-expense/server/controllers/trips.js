const Trip = require('../models/trips');
const boom =require('boom');

exports.createtrips = async function(req,reply){
     
    const trip=new Trip({
        
        email:req.body.email,
        org_name:req.body.org_name,
        // trip_no:trip_id,
        travel_type:req.body.travel_type,
        trip_name:req.body.trip_name,
        trip_destination:req.body.trip_destination,
        trip_visa:req.body.trip_visa,
        business_purpose:req.body.business_purpose,
        f_type:req.body.f_type,
        depart_from:req.body.depart_from,
        arrive_at:req.body.arrive_at,
        depart_date:req.body.depart_date,
        location:req.body.location,
        check_in:req.body.check_in,
        check_out:req.body.check_out,
        description_hotel:req.body.description_hotel,

        
        approver:req.body.approver
    })
    try {
        
        const Savetrip = await trip.save();
        console.log(Savetrip);
        return reply.send(Savetrip);
    } catch (err) {
        return reply.send({error:"Something went wrong"})
    }
};
exports.deletetrips = async function(req,reply){
    try{
        const response =await Trip.deleteOne({_id:req.params.id})
        return reply.send("sucessfully deleted")

    }
    catch(er){
        throw  boom.boomify(err)

    }


}
exports.getTripsByid =async function(req,reply){
    try{
        const res = await Trip.findOne({_id:req.params.tripsid})
        return reply.send(res)

    }
    catch(er){
        throw boom.boomify(er)
    }
};
exports.getAllTrip =async function(req,reply){
    try{
        const res = await Trip.find({org_name:req.params.orgname})
        return reply.send(res)
    }
    catch(er){
        throw boom.boomify(er)
    }


} 
exports.getTripForUser =async function(req,reply){
    try{
        const res = await Trip.find({email:req.params.email})
        return reply.send(res)
    }
    catch(er){
        throw boom.boomify(er)
    }
}   

exports.updatetrips = async function(req,reply){
    try{
        const  res= await Trip.findOneAndUpdate({_id:req.params.tripsid},
            {status:req.body.status})
            return reply.send(res)
    }
    catch(er){
        throw boom.boomify(er)
    }
}