import { useState, useEffect } from "react";

import { Button } from '../components/Button';

import { api } from '../services/api';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: Array<{
    id: number,
    title: string,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  }>,
  selectedGenreId: number,
  handleClickButton: (id: number) => void
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}