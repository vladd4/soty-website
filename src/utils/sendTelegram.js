export async function sendFormToTelegram(message) {
  const botToken = "6865810991:AAEIV511UvSjCgbDKS0k_8YHqgQZJs1jXfc";
  const chatId = "-4007675188";
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
