import { validateElements } from './v_elements'
import { validateDNA } from './v_DNA'
import { overlaping } from './v_oiverlaping'
import { validateID } from './v_id'

export function validation(dnaFeatures_data) {
    //console.log(dnaFeatures_data)
    dnaFeatures_data = validateID(dnaFeatures_data)
    dnaFeatures_data = validateElements(dnaFeatures_data)
    dnaFeatures_data = validateDNA(dnaFeatures_data)
    dnaFeatures_data = overlaping(dnaFeatures_data)
    //console.log(dnaFeatures_data)
    return dnaFeatures_data
}