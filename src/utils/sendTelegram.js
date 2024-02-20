export async function sendFormToTelegram(message) {
  const botToken = process.env.REACT_APP_BOT_TOKEN;
  const chatId = process.env.REACT_APP_CHAT_ID;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    if (response.ok) {
      alert("Дякуємо! Форма успішно надіслана.");
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
