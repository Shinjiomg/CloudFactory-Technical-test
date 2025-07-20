import { Badge } from "@/components/ui/badge";

interface TagListProps {
  title: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
}

export function TagList({ title, tags, onTagClick }: TagListProps) {
  const handleTagClick = (tag: string) => {
    onTagClick?.(tag);
  };

  return (
    <section 
      className="mt-8 max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto" 
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-tags`}
    >
      <h2 
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-tags`} 
        className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-left"
      >
        {title}
      </h2>
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-start" role="list">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="tag"
            role="listitem"
            onClick={() => handleTagClick(tag)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTagClick(tag);
              }
            }}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
} 