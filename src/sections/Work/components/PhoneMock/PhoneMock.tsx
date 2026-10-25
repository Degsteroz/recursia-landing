"use client";

import { useState } from "react";
import styles from "./PhoneMock.module.sass";

const DOWS = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const FULL = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const EVENTS: Record<number, { time: string; seats: string; title: string; place: string }> = {
  0: {
    time: "19:00 · 2 ч",
    seats: "Регистрация открыта",
    title: "IT Connect Meetup: фронтенд без боли",
    place: "Startit Center, Belgrade",
  },
  4: {
    time: "18:30 · 3 ч",
    seats: "Осталось 12 мест",
    title: "Networking night: DevOps & Coffee",
    place: "Coworking Kvart, Novi Sad",
  },
};

export function PhoneMock() {
  const [day, setDay] = useState(0);
  const [registered, setRegistered] = useState<Record<number, boolean>>({});
  const event = EVENTS[day];
  const done = Boolean(registered[day]);

  return (
    <div className={styles.screen} lang="ru">
      <div className={styles.top}>
        <div className={styles.identity}>
          <span className={styles.icon}>✓</span>
          <span className={styles.app}>IT Connect Hub</span>
        </div>
        <span className={styles.avatar}>VL</span>
      </div>
      <div className={styles.heading}>Мероприятия</div>
      <div className={styles.dateRow}>
        <span className={styles.date}>
          {FULL[day]}, {25 + day} Октября
        </span>
        <span className={styles.calendar}>Календарь</span>
      </div>
      <div className={styles.days}>
        {DOWS.map((dow, index) => {
          const selected = index === day;
          const hasEvent = Boolean(EVENTS[index]);
          return (
            <button
              key={dow}
              type="button"
              className={selected ? `${styles.day} ${styles.on}` : styles.day}
              onClick={() => setDay(index)}
            >
              <span className={styles.dow}>{dow}</span>
              <span className={styles.num}>{25 + index}</span>
              <span className={hasEvent ? `${styles.dot} ${styles.has}` : styles.dot} />
            </button>
          );
        })}
      </div>
      <div className={styles.filters}>
        <span className={styles.filterOn}>Все мероприятия</span>
        <span className={styles.filter}>Доступна регистрация</span>
      </div>
      {event ? (
        <div className={styles.card}>
          <div className={styles.meta}>
            <span>{event.time}</span>
            <span className={styles.seats}>{event.seats}</span>
          </div>
          <div className={styles.title}>{event.title}</div>
          <div className={styles.place}>{event.place}</div>
          <button
            type="button"
            className={done ? `${styles.register} ${styles.done}` : styles.register}
            onClick={() =>
              setRegistered((current) => ({ ...current, [day]: !current[day] }))
            }
          >
            {done ? "Вы зарегистрированы ✓" : "Зарегистрироваться"}
          </button>
        </div>
      ) : (
        <div className={styles.empty}>
          <div className={styles.emptyTitle}>На эту дату мероприятий нет</div>
          <div className={styles.emptyHint}>
            Выберите другой день в ленте — дни с событиями отмечены точкой.
          </div>
        </div>
      )}
    </div>
  );
}
