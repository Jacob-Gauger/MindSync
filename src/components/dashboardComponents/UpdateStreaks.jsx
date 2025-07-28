export function updateStreak(key) {
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  const stored = JSON.parse(localStorage.getItem(key)) || {
    lastActiveDate: null,
    streakCount: 0,
  };

  if (stored.lastActiveDate === today) return;

  const newCount = stored.lastActiveDate === yesterday ? stored.streakCount + 1 : 1;

  localStorage.setItem(
    key,
    JSON.stringify({
      lastActiveDate: today,
      streakCount: newCount,
    })
  );
}
