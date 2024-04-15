interface agentType {
  profile: string;
  name: string;
  minutesTalked: string;
  completedLeads: string;
  incomingCalls:CallType[];
  finishedCalls:callType[];
  totalIncomingCalls: string;
  totalFinishedCalls: string;
  time: string;
  client1: number;
  client2: number;
  id: number;
}
interface AgentProfile {
  profile: string;
  name: string;
  minutesTalked: string;
  completedLeads: string;
  incomingCalls:CallType[];
  finishedCalls:callType[];
  totalIncomingCalls: string;
  totalFinishedCalls: string;
  time: string;
  client1: number;
  client2: number;
  id: number;
}

export interface callType{
  month:number,
  numberOfCall:number;
}
interface callPart {
  name: string;
}
interface agentCalls {
  name: string;
  minutesTalked: string;
  receivedCalls: string;
  missedCalls: string;
  message: string;
  time: string;
  client1: number;
  client2: number;
  id: number;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}
interface RowSelection {
  [key: string]: boolean;
}
interface RecordingTableType {
  contact: string;
  number: string;
  campaign: string;
  call: string;
  Date: string;
  duration: string;
  outcome: string;
  id?: string;
}
interface ContactTableType {
  contact: string;
  Number: string;
  Campaign: string;
  Call: string;
  Call_Date_Start: string;
  Call_Date_End: string;
  Duration: string;
  Outcome: string;
  id?: string;
}
interface ListTableType{
  id: string;
  listName:string;
  company:string;
  followUp:number;
  notInterested:number;
  closed:number;
  dateCreated:string;
}
interface CallTableType {
  contact: string;
  number: string;
  campaign: string;
  call: string;
  Date: string;
  duration: string;
  outcome: string;
  id?: string;
}

interface CampaignTableType {
  type: string;
  campaign: string;
  costOutcome: number;
  outcome: string;
  id?: string;
  budget: number;
  agents: string;
  dials: number;
  pickups: number;
  failed: number;
  busy: number;
  amountspent: number;
  list: string;
}
interface CompanyTableType {
  emailAddress: string;
  companyName: string;
  costOutcome: number;
  outcome: string;
  id?: string;
  phoneNumber: string;
  registeredTime: string;
  dials: number;
  pickups: number;
  failed: number;
  busy: number;
  amountspent: number;
  registeredTime: string;
}

interface contactType {
  columnName: string;
  example: string;
  list: string;
  description: string;
}

interface contactEditType {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
}
interface CallStep {
  name: string;
  color: string;
  active: boolean;
  value: number;
}

export interface HomeDataType {
  id: number;
  name: string;
  contact: string;
  averageTime: string;
  followUp: string;
  closing: string;
  callSteps: CallStep[];
}
