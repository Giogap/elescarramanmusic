const getDaysRemaining = (dateString: string): number => {
  const today = new Date();
  const concertDate = new Date(dateString);

  // Resetear las horas para comparar solo fechas
  today.setHours(0, 0, 0, 0);
  concertDate.setHours(0, 0, 0, 0);

  const timeDiff = concertDate.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysDiff;
};

export default getDaysRemaining;
