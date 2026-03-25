<<<<<<< HEAD
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { initialData } from '../data/initialData';
import { apiService } from '../services/api';
=======
import { createContext, useContext, useState, useCallback } from 'react';
import { loadData, saveData } from '../data/initialData';
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7

const DataContext = createContext(null);

export function DataProvider({ children }) {
<<<<<<< HEAD
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [notices, faculty, timetables, syllabus, rawEvents, books] = await Promise.all([
        apiService.getNotices(),
        apiService.getFaculty(),
        apiService.getTimetables(),
        apiService.getSyllabus(),
        apiService.getEvents(),
        apiService.getBooks(),
      ]);

      const events = {
        alumni: rawEvents.filter(e => e.category === 'alumni'),
        extraCurricular: rawEvents.filter(e => e.category === 'extraCurricular'),
        conferences: rawEvents.filter(e => e.category === 'conferences'),
        cultural: rawEvents.filter(e => e.category === 'cultural'),
        awards: rawEvents.filter(e => e.category === 'awards'),
        social: rawEvents.filter(e => e.category === 'social'),
      };

      const booksByYear = {
        "FY": books.filter(b => b.course_year === 'FY'),
        "SY": books.filter(b => b.course_year === 'SY'),
        "TY": books.filter(b => b.course_year === 'TY'),
        "MSC-I": books.filter(b => b.course_year === 'MSC-I'),
        "MSC-II": books.filter(b => b.course_year === 'MSC-II'),
      };

      setData({
        notices,
        faculty,
        timetables,
        syllabus,
        events,
        books: booksByYear,
        toppers: [],
        placements: [],
        trainings: [],
        skillPrograms: []
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addNotice = useCallback(async (notice) => {
    const success = await apiService.addNotice(notice);
    if (success) await fetchData();
    return !!success;
  }, [fetchData]);

  const updateNotice = useCallback(async (id, notice) => {
    const success = await apiService.updateNotice(id, notice);
    if (success) await fetchData();
    return !!success;
  }, [fetchData]);

  const deleteNotice = useCallback(async (id) => {
    await apiService.deleteNotice(id);
    await fetchData();
  }, [fetchData]);

  const addFaculty = useCallback(async (member) => {
    const success = await apiService.addFaculty(member);
    if (success) await fetchData();
    return !!success;
  }, [fetchData]);

  const updateFaculty = useCallback(async (id, member) => {
    const success = await apiService.updateFaculty(id, member);
    if (success) await fetchData();
    return !!success;
  }, [fetchData]);

  const deleteFaculty = useCallback(async (id) => {
    await apiService.deleteFaculty(id);
    await fetchData();
  }, [fetchData]);

  const addTimetable = useCallback(async (item) => {
    const success = await apiService.addTimetable(item);
    if (success) await fetchData();
    return !!success;
  }, [fetchData]);

  return (
    <DataContext.Provider value={{ 
      data, 
      loading, 
      addNotice, 
      updateNotice,
      deleteNotice,
      addFaculty, 
      updateFaculty,
      deleteFaculty,
      addTimetable,
      refreshData: fetchData 
    }}>
=======
  const [data, setData] = useState(() => loadData());

  const updateData = useCallback((key, value) => {
    setData(prev => {
      const updated = { ...prev, [key]: value };
      saveData(updated);
      return updated;
    });
  }, []);

  const updateNestedData = useCallback((parentKey, childKey, value) => {
    setData(prev => {
      const updated = {
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        }
      };
      saveData(updated);
      return updated;
    });
  }, []);

  return (
    <DataContext.Provider value={{ data, updateData, updateNestedData }}>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
