interface agentType {
  profile: string;
  name: string;
  minutesTalked: string;
  completedLeads: string;
  IncomingCalls: string;
  FinishedCalls: string;
  time: string;
  client1: number;
  client2: number;
  id: number;
}

interface callPart {
  name: string;
}
interface agentCalls{
  name: string,
  minutesTalked: string,
  receivedCalls: string,
  missedCalls: string,
  message:string
  time: string,
  client1: number,
  client2: number,
  id: number,
}


interface Person {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

interface RecordingTableType {
  contact: string;
  number: string;
  campaign: string;
  call: string;
  Date: string;
  duration: string;
  outcome: string;
}
