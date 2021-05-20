

export function validateID(dnaFeatures_data = []) {
    dnaFeatures_data.map((feature,index)=>{
        let id = feature?._id
        if(!id){
            dnaFeatures_data[index]._id = `feature_${index}_${feature?.objectType}`
        }
        return null
    })
    return dnaFeatures_data;
  }