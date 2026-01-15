import { useState, useEffect, useMemo } from 'react';
import { questions, categories } from '../data';
import { Accordion } from '../components/Accordion';
import { Search } from 'lucide-react';
import Fuse from 'fuse.js';

export function ListView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(new Set());
  const [displayCount, setDisplayCount] = useState(20);

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(questions, {
        keys: ['questionText', 'answers.text'],
        threshold: 0.3,
        includeScore: true
      }),
    []
  );

  // Filter and search questions
  const filteredQuestions = useMemo(() => {
    let result = questions;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((q) => q.category === selectedCategory);
    }

    // Apply search
    if (searchQuery.trim()) {
      const fuseResults = fuse.search(searchQuery);
      const searchedIds = new Set(fuseResults.map((r) => r.item.id));
      result = result.filter((q) => searchedIds.has(q.id));
    }

    return result;
  }, [searchQuery, selectedCategory, fuse]);

  // Auto-expand accordions if 5 or fewer results
  useEffect(() => {
    if (filteredQuestions.length <= 5 && filteredQuestions.length > 0) {
      setOpenAccordions(new Set(filteredQuestions.map((q) => q.id)));
    } else {
      setOpenAccordions(new Set());
    }
  }, [filteredQuestions]);

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 500 && displayCount < filteredQuestions.length) {
        setDisplayCount((prev) => Math.min(prev + 20, filteredQuestions.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayCount, filteredQuestions.length]);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(20);
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (questionId: number) => {
    setOpenAccordions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const displayedQuestions = filteredQuestions.slice(0, displayCount);

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Liste des Questions</h1>
          <p className="text-gray-600">
            Parcourez toutes les questions de l'examen civique
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="sticky top-16 md:top-16 bg-white shadow-md rounded-lg p-4 mb-6 z-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Toutes les catégories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 text-sm text-gray-600">
            {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''} trouvée
            {filteredQuestions.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Questions List */}
        {displayedQuestions.length > 0 ? (
          <div className="space-y-3">
            {displayedQuestions.map((question) => (
              <Accordion
                key={question.id}
                question={question}
                isOpen={openAccordions.has(question.id)}
                onToggle={() => toggleAccordion(question.id)}
                showAnswer={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune question trouvée</p>
          </div>
        )}

        {/* Loading More Indicator */}
        {displayCount < filteredQuestions.length && (
          <div className="text-center py-8">
            <div className="inline-block animate-pulse text-gray-500">
              Chargement de plus de questions...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
