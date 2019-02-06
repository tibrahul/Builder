export interface flow {
    id: string,
    name: string,
    label: string,
    description: string,
    action_on_data: string,
}

export interface flow_component {
    id: string,
    name: string,
    description: string,
}

export interface generation_flow {
    flow_name: string,
    flow_sequence: [],
}

export interface micro_flow {
    sequence_id: string,
    component_name: string,
    micro_flow_step_name: string
}
