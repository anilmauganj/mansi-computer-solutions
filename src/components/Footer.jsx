'use client';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="bg-blue-900 text-white text-center py-4">
      <p>&copy; 2009 - {year} Mansi Computer Solutions. All rights reserved.</p>
       <br />
        Developed by <span className="text-blue-300 font-medium">Anil Kumar</span>
    </footer>
  );
}
