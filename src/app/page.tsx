const mockUrls = [
    "https://utfs.io/f/a066a164-b5ec-4378-8d3f-485e9e3a4a01-ymvvbi.gif",
    "https://utfs.io/f/5c032bcc-611a-4cdb-8c7e-e25ab20b32f8-kdtwnh.jpg",
    "https://utfs.io/f/8b1fb98d-1139-47b2-b303-804b4cace094-1lnhxi.png"
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
            {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
                <div key={image.id} className="w-48">
                    <img src={image.url} />
                </div>
            ))}
        </div>
    </main>
  );
}
