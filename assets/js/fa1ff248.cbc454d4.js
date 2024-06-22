"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[133],{74482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(85893),a=n(11151);const o={title:"StateFlow - Build State-Driven Workflows with Customized Speaker Selection in GroupChat",authors:"yiranwu",tags:["LLM","research"]},r=void 0,i={permalink:"/autogen/blog/2024/02/29/StateFlow",source:"@site/blog/2024-02-29-StateFlow/index.mdx",title:"StateFlow - Build State-Driven Workflows with Customized Speaker Selection in GroupChat",description:"TL;DR: Introduce Stateflow, a task-solving paradigm that conceptualizes complex task-solving processes backed by LLMs as state machines.",date:"2024-02-29T00:00:00.000Z",formattedDate:"February 29, 2024",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:6.48,hasTruncateMarker:!1,authors:[{name:"Yiran Wu",title:"PhD student at Pennsylvania State University",url:"https://github.com/kevin666aa",imageURL:"https://github.com/kevin666aa.png",key:"yiranwu"}],frontMatter:{title:"StateFlow - Build State-Driven Workflows with Customized Speaker Selection in GroupChat",authors:"yiranwu",tags:["LLM","research"]},unlisted:!1,prevItem:{title:"What's New in AutoGen?",permalink:"/autogen/blog/2024/03/03/AutoGen-Update"},nextItem:{title:"FSM Group Chat -- User-specified agent transitions",permalink:"/autogen/blog/2024/02/11/FSM-GroupChat"}},c={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"StateFlow",id:"stateflow",level:2},{value:"Experiments",id:"experiments",level:2},{value:"Implement StateFlow With GroupChat",id:"implement-stateflow-with-groupchat",level:2},{value:"For Further Reading",id:"for-further-reading",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"TL;DR:"})," Introduce Stateflow, a task-solving paradigm that conceptualizes complex task-solving processes backed by LLMs as state machines.\nIntroduce how to use GroupChat to realize such an idea with a customized speaker selection function."]}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["It is a notable trend to use Large Language Models (LLMs) to tackle complex tasks, e.g., tasks that require a sequence of actions and dynamic interaction with tools and external environments.\nIn this paper, we propose ",(0,s.jsx)(t.strong,{children:"StateFlow"}),", a novel LLM-based task-solving paradigm that conceptualizes complex task-solving processes as state machines.\nIn ",(0,s.jsx)(t.strong,{children:"StateFlow"}),', we distinguish between "process grounding\u201d (via state and state transitions) and "sub-task solving\u201d (through actions within a state), enhancing control and interpretability of the task-solving procedure.\nA state represents the status of a running process. The transitions between states are controlled by heuristic rules or decisions made by the LLM, allowing for a dynamic and adaptive progression.\nUpon entering a state, a series of actions is executed, involving not only calling LLMs guided by different prompts, but also the utilization of external tools as needed.']}),"\n",(0,s.jsx)(t.h2,{id:"stateflow",children:"StateFlow"}),"\n",(0,s.jsx)(t.p,{children:"Finite State machines (FSMs) are used as control systems to monitor practical applications, such as traffic light control.\nA defined state machine is a model of behavior that decides what to do based on current status. A state represents one situation that the FSM might be in.\nDrawing from this concept, we want to use FSMs to model the task-solving process of LLMs. When using LLMs to solve a task with multiple steps, each step of the task-solving process can be mapped to a state."}),"\n",(0,s.jsx)(t.p,{children:"Let's take an example of an SQL task (See the figure below).\nFor this task, a desired procedure is:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"gather information about the tables and columns in the database,"}),"\n",(0,s.jsx)(t.li,{children:"construct a query to retrieve the required information,"}),"\n",(0,s.jsx)(t.li,{children:"finally verify the task is solved and end the process."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:['For each step, we create a corresponding state. Also, we define an error state to handle failures.\nIn the figure, execution outcomes are indicated by red arrows for failures and green for successes.\nTransition to different states is based on specific rules. For example, at a successful "Submit" command, the model transits to the ',(0,s.jsx)(t.em,{children:"End"})," state.\nWhen reaching a state, a sequence of output functions defined is executed (e.g., M_i -> E means to first call the model and then execute the SQL command).\n",(0,s.jsx)(t.img,{alt:"Intercode Example",src:n(51779).Z+"",width:"1188",height:"604"})]}),"\n",(0,s.jsx)(t.h2,{id:"experiments",children:"Experiments"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"InterCode:"})," We evaluate StateFlow on the SQL task and Bash task from the InterCode benchmark, with both GTP-3.5-Turbo and GPT-4-Turbo.\nWe record different metrics for a comprehensive comparison. The 'SR' (success rate) measures the performance,\n'Turns' represents the number of interactions with the environment, and 'Error Rate' represents the percentage of errors of the commands executed.\nWe also record the cost of the LLM usage."]}),"\n",(0,s.jsx)(t.p,{children:"We compare with the following baselines:\n(1) ReAct: a few-shot prompting method that prompts the model to generate thoughts and actions.\n(2) Plan & Solve: A two-step prompting strategy to first ask the model to propose a plan and then execute it."}),"\n",(0,s.jsx)(t.p,{children:"The results of the Bash task are presented below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Bash Result",src:n(6361).Z+"",width:"1384",height:"268"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ALFWorld:"}),"\nWe also experiment with the ALFWorld benchmark, a synthetic text-based game implemented in the TextWorld environments.\nWe tested with GPT-3.5-Turbo and took an average of 3 attempts."]}),"\n",(0,s.jsx)(t.p,{children:"We evaluate with:\n(1) ReAct: We use the two-shot prompt from the ReAct. Note there is a specific prompt for each type of task.\n(2) ALFChat (2 agents): A two-agent system setting from AutoGen consisting of an assistant agent and an executor agent. ALFChat is based on ReAct, which modifies the ReAct prompt to follow a conversational manner.\n(3) ALFChat (3 agents): Based on the 2-agent system, it introduces a grounding agent to provide commonsense facts whenever the assistant outputs the same action three times in a row."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ALFWorld Result",src:n(88021).Z+"",width:"1422",height:"268"})}),"\n",(0,s.jsxs)(t.p,{children:["For both tasks, ",(0,s.jsx)(t.strong,{children:"StateFlow"})," achieves the best performance with the lowest cost. For more details, please refer to our ",(0,s.jsx)(t.a,{href:"https://arxiv.org/abs/2403.11322",children:"paper"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"implement-stateflow-with-groupchat",children:"Implement StateFlow With GroupChat"}),"\n",(0,s.jsxs)(t.p,{children:["We illustrate how to build ",(0,s.jsx)(t.strong,{children:"StateFlow"})," with GroupChat. Previous blog ",(0,s.jsx)(t.a,{href:"/blog/2024/02/11/FSM-GroupChat/",children:"FSM Group Chat"}),"\nintroduces a new feature of GroupChat that allows us to input a transition graph to constrain agent transitions.\nIt requires us to use natural language to describe the transition conditions of the FSM in the agent's ",(0,s.jsx)(t.code,{children:"description"})," parameter, and then use an LLM to take in the description and make decisions for the next agent.\nIn this blog, we take advantage of a customized speaker selection function passed to the ",(0,s.jsx)(t.code,{children:"speaker_selection_method"})," of the ",(0,s.jsx)(t.code,{children:"GroupChat"})," object.\nThis function allows us to customize the transition logic between agents and can be used together with the transition graph introduced in FSM Group Chat. The current StateFlow implementation also allows the user to override the transition graph.\nThese transitions can be based on the current speaker and static checking of the context history (for example, checking if 'Error' is in the last message)."]}),"\n",(0,s.jsxs)(t.p,{children:["We present an example of how to build a state-oriented workflow using GroupChat.\nWe define a custom speaker selection function to be passed into the ",(0,s.jsx)(t.code,{children:"speaker_selection_method"})," parameter of the GroupChat.\nHere, the task is to retrieve research papers related to a given topic and create a markdown table for these papers."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"StateFlow Example",src:n(70886).Z+"",width:"1226",height:"472"})}),"\n",(0,s.jsx)(t.p,{children:"We define the following agents:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Initializer: Start the workflow by sending a task."}),"\n",(0,s.jsx)(t.li,{children:"Coder: Retrieve papers from the internet by writing code."}),"\n",(0,s.jsx)(t.li,{children:"Executor: Execute the code."}),"\n",(0,s.jsx)(t.li,{children:"Scientist: Read the papers and write a summary."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'# Define the agents, the code is for illustration purposes and is not executable.\ninitializer = autogen.UserProxyAgent(\n   name="Init"\n)\ncoder = autogen.AssistantAgent(\n   name="Coder",\n   system_message="""You are the Coder. Write Python Code to retrieve papers from arxiv."""\n)\nexecutor = autogen.UserProxyAgent(\n   name="Executor",\n   system_message="Executor. Execute the code written by the Coder and report the result.",\n)\nscientist = autogen.AssistantAgent(\n   name="Scientist",\n   system_message="""You are the Scientist. Please categorize papers after seeing their abstracts printed and create a markdown table with Domain, Title, Authors, Summary and Link. Return \'TERMINATE\' in the end.""",\n)\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the Figure, we define a simple workflow for research with 4 states: Init, Retrieve, Research, and End. Within each state, we will call different agents to perform the tasks."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Init: We use the initializer to start the workflow."}),"\n",(0,s.jsx)(t.li,{children:"Retrieve: We will first call the coder to write code and then call the executor to execute the code."}),"\n",(0,s.jsx)(t.li,{children:"Research: We will call the scientist to read the papers and write a summary."}),"\n",(0,s.jsx)(t.li,{children:"End: We will end the workflow."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Then we define a customized function to control the transition between states:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'def state_transition(last_speaker, groupchat):\n   messages = groupchat.messages\n\n   if last_speaker is initializer:\n       # init -> retrieve\n       return coder\n   elif last_speaker is coder:\n       # retrieve: action 1 -> action 2\n       return executor\n   elif last_speaker is executor:\n       if messages[-1]["content"] == "exitcode: 1":\n           # retrieve --(execution failed)--\x3e retrieve\n           return coder\n       else:\n           # retrieve --(execution success)--\x3e research\n           return scientist\n   elif last_speaker == "Scientist":\n       # research -> end\n       return None\n\n\ngroupchat = autogen.GroupChat(\n   agents=[initializer, coder, executor, scientist],\n   messages=[],\n   max_round=20,\n   speaker_selection_method=state_transition,\n)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We recommend implementing the transition logic for each speaker in the customized function. In analogy to a state machine, a state transition function determines the next state based on the current state and input.\nInstead of returning an ",(0,s.jsx)(t.code,{children:"Agent"})," class representing the next speaker, we can also return a string from ",(0,s.jsx)(t.code,{children:"['auto', 'manual', 'random', 'round_robin']"})," to select a default method to use.\nFor example, we can always default to the built-in ",(0,s.jsx)(t.code,{children:"auto"})," method to employ an LLM-based group chat manager to select the next speaker.\nWhen returning ",(0,s.jsx)(t.code,{children:"None"}),', the group chat will terminate. Note that some of the transitions, such as "initializer" -> "coder" can be defined with the transition graph.']}),"\n",(0,s.jsx)(t.h2,{id:"for-further-reading",children:"For Further Reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://arxiv.org/abs/2403.11322",children:"StateFlow paper"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/notebooks/agentchat_groupchat_stateflow",children:"StateFlow notebook"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/notebooks/agentchat_groupchat_customized",children:"GroupChat with Customized Speaker Selection notebook"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/blog/2024/02/11/FSM-GroupChat/",children:"FSM Group Chat"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.a,{href:"/docs/Getting-Started",children:["Documentation about ",(0,s.jsx)(t.code,{children:"autogen"})]})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},88021:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/alfworld-0f8563d4ea3fd180f82ae6cbd33c3c0f.png"},6361:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/bash_result-f30fcfabcd7f4d53d32af977f16178ce.png"},51779:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/intercode-fd9f091f97c91e13a58232ebc9dca4e6.png"},70886:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sf_example_1-4e72bff416bab1de6a634bdcc552c199.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(67294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);