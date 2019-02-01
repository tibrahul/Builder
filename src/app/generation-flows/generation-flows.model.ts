export interface  generationFlow {
    flow:[
        {
            name: "GpCreate",
            label: "Save",
            description: "creates a noun",
            action_on_data: "GpCreate"
        },
        {
            name: "GpUpdate",
            label: "Update",
            description: "updates a noun",
            action_on_data: "GpUpdate"
        },
        {
            name: "GpDelete",
            label: "Delete",
            description: "deletes a noun",
            action_on_data: "GpDelete"
        },
        {
            name: "GpSearch",
            label: "Search",
            description: "searches a noun",
            action_on_data: "GpSearch"
        },
        {
            name: "GpSearchForUpdate",
            label: "Search for update",
            description: "special search for locking a noun",
            action_on_data: "GpSearchForUpdate"
        },
        {
            name: "GpGetAllValues",
            label: "Get All Records",
            description: "special search that gets all values",
            action_on_data: "GpGetAllValues"
        },
        {
            name: "GpDeleteByParentId",
            label: "Delete by parent id",
            description: "delete noun by parent id",
            action_on_data: "GpDeleteByParentId"
        },
        {
            name: "GpTakePhoto",
            label: "Take photo",
            description: "takes photo",
            action_on_data: "GpTakePhoto"
        },
        {
            name: "GpRecordVideo",
            label: "Take video",
            description: "takes video",
            action_on_data: "GpRecordVideo"
        }
    ];

    flow_components : [{
        name: "GpSpringController",
        description: "controller for a spring server application"
    },{
        name: "GpAngularOneController",
        description: "controller for AngularJS version 1"
    },{
        name: "GpSpringService",
        description: "service component for a Spring based application"
    },{
        name: "GpSpringDao",
        description: "dao component for a Spring based application"
    },
    {
        name: "GpNodeJSController",
        description: "controller for a NodeJs server application"
    },
    {
        name: "GpNodeJService",
        description: "service component for a NodeJS based application"
    },
    {
        name: "GpNodeJSDao",
        description: "dao component for a NodeJs based application"
    },
    {
        name: "GpAngularTwoService",
        description: "service for AngularJs version 2 desktop"
    },
    {
        name: "GpReactController",
        description: "controller for ReactJs based application"
    },
    {
        name: "GpAngularTwoIonic2Service",
        description: "service for AngularJs version 2 ionic2 mobile"
    },
    {
        name: "GpAngularFourService",
        description: "service for AngularJs version 4"
    },
    {
        name: "GpAngularFourIonic2Service",
        description: "service for AngularJs version 4 ionic2 mobile"
    }]

}