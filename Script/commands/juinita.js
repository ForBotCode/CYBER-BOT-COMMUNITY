const readline = require('readline');

// ইন্টারফেস তৈরি ইনপুট ও আউটপুটের জন্য
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// বটের রিপ্লাই ফাংশন
function chatbot(message) {
  const normalized = message.toLowerCase().trim();

  if (normalized === 'juinita ke?') {
    return 'সাকিবের সিনিয়র বউ👀🌸';
  } else {
    return 'আমি বুঝলাম না। আবার বলো।';
  }
}

// বারবার ইনপুট নেয়ার জন্য রিকার্সিভ ফাংশন
function ask() {
  rl.question('তুমি: ', (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      console.log('বট: ভালো থেকো!');
      rl.close();
    } else {
      const response = chatbot(userInput);
      console.log('বট:', response);
      ask(); // আবার প্রশ্ন করা হবে
    }
  });
}

ask(); // শুরু করা হচ্ছে
