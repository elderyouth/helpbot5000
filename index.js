//Import Important Libraries
const SlackBot = require('slackbots');

//Define HelpBot
const hbot = new SlackBot({
  token:'',
  name:'helpbot5000'
});

//Bot Event Handler 'Start'
hbot.on('start',()=>{
  const params = {
    icon_emoji: ':space_invader:'
  };

  //Warmup Greeting
  hbot.postMessageToChannel(
    'l1_pytorch',
    '*Beep* Hello, this is HelpBot5000 Ready to help',
    params
  );

});

hbot.on('message', data=>{
  if(data.type !== 'message') return;
  handleCommands(data.text);  
});

//Bot Event Handler 'Error'
hbot.on('error',(error)=>{
  console.log(error);

  const params = {
    icon_emoji: ':speak_no_evil:'
  };

  hbot.postMessageToChannel(
    'l1_pytorch',
    `*Beep* Something went wrong ${error}`,
    params
  );
});

/**
 * Respond to available commands
 * @param {string} command
 */
function handleCommands(command){
  if(command.includes(' /help')){
    listHelpCommands();
  } else if (command.includes(' /leaders')) {
    listStudentLeaders();
  } else if (command.includes(' /rules')) {
    listRules();
  } else{
    const params = {
      icon_emoji: ':speak_no_evil:'
    };

    hbot.postMessageToChannel(
      'l1_pytorch',
      `*Beep* Unknown Command`,
      params
    );
  }
}

/**
 * List all available commands for our bot
 */
function listHelpCommands(){
  const params = {
    icon_emoji: ':memo:'
  };

  hbot.postMessageToChannel(
    'l1_pytorch',
    `>_*My Available Commands:*_
      >(1.)\`help\` - I will list all available commands
      >(2.)\`leaders\` - I will list names and handles of your student leaders
      >(3.)\`rules\` - I will brief you on the channel rules
      >(4.)\`joke\` - I will tell you a terrible programming joke
    `,
    params
  );

}

/**
 * List all Channel Student Leaders
 */
function listStudentLeaders(){
  const params = {
    icon_emoji: ':space_invader:'
  };

  const leaders =[
    {name : '@Adrian', schedule:'monday'},
    {name : '@Ayush Modi', schedule:'monday'},
    {name : '@Feri', schedule:'monday'},
    {name : '@KhineZar', schedule:'monday'},
    {name : '@Mariem Ben Charrada', schedule:'monday'},
    {name : '@Kyung Mo Yang', schedule:'monday'}
];

  //Warmup Greeting
  hbot.postMessageToChannel(
    'l1_pytorch',
    `*Beep* Your current Student Leaders are:
    ${leaders.map((leader,i) =>`(${i}.)${leader.name}
      >_Schedule_:
      >${leader.sch}`)}
    Feel free to contact them!`,
    params
  );
}

function listRules(){
  const params = {
    icon_emoji: ':memo:'
  };

  hbot.postMessageToChannel(
    'l1_pytorch',
    `_*Channel Rules:*_
      >(1.) Be Excellent to each other
      >(2.) Party On, Dudes! 
    (Bill & Ted 's Excellent Adventure reference)
    `,
    params
  );
}