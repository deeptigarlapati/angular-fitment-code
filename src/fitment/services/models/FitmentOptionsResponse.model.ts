/* Response:
{
   "type" : "fitmentOptionResponse",
   "status" : "OK",
   "success" : true,
   "option" : [ {
      "key" : "18",
      "value" : {
         "fitmentOptionList" : [ {
            "position" : [ {
               "both" : {
                  "runFlat" : false,
                  "size" : {
                     "aspectRatio" : 0.0,
                     "diameter" : 0.0,
                     "width" : 0.0
                  },
                  "staggered" : false
               }
            } ],
            "staggered" : false,
            "trim" : "FWD",
            "trimOption" : "245/60R18 105H",
            "vehicleId" : "48989"
         } ]
      }
   }, {
      "key" : "19",
      "value" : {
         "fitmentOptionList" : [ {
            "position" : [ {
               "both" : {
                  "runFlat" : false,
                  "size" : {
                     "aspectRatio" : 0.0,
                     "diameter" : 0.0,
                     "width" : 0.0
                  },
                  "staggered" : false
               }
            } ],
            "staggered" : false,
            "trim" : "FWD",
            "trimOption" : "245/55R19 103H",
            "vehicleId" : "48992"
         } ]
      }
   } ]
}
*/


export interface Size {
    aspectRatio: number;
    diameter: number;
    width: number;
}

export interface Both {
    runFlat: boolean;
    size: Size;
    staggered: boolean;
}

export interface Position {
    both: Both;
}

export interface FitmentOptionList {
    position: Position[];
    staggered: boolean;
    trim: string;
    trimOption: string;
    vehicleId: string;
}

export interface Value {
    fitmentOptionList: FitmentOptionList[];
}

export interface Option {
    key: string;
    value: Value;
}

export interface FitmentOptionsResponse {
    type: string;
    status: string;
    success: boolean;
    option: Option[];
}
