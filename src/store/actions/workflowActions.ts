import { ActionTypes } from './index';

export enum WorkflowStep {
  'OVERVIEW',
  'SELECT_CLIENT',
  'GENERATE_KEY_PAIRS',
  'UPLOAD_VALIDATOR_FILE',
  'CONNECT_WALLET',
  'WAIT_3_HRS',
  'UPLOAD_VALIDATOR_FILE_STEP_2',
  'SUMMARY',
  'TRANSACTION_SIGNING',
  'CONGRATULATIONS',
}

export interface UpdateWorkflowAction {
  type: ActionTypes.updateWorkflow;
  payload: WorkflowStep;
}
export const updateWorkflow = (
  workflowStep: WorkflowStep
): UpdateWorkflowAction => {
  return {
    type: ActionTypes.updateWorkflow,
    payload: workflowStep,
  };
};

export type DispatchWorkflowUpdateType = (step: WorkflowStep) => void;
