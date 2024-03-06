interface agentType{
  profile: string,
  name: string,
  minutesTalked: string,
  completedLeads: string,
  IncomingCalls: string,
  FinishedCalls: string,
  time: string,
  client1: number,
  client2: number,
  id: number,
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


interface callPart{
  name:string,
}