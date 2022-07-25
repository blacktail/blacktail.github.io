// version 1
function List({ pageId }) {
  return items[pageId].map((item) => <li>{item}</li>);
}

// version 2
function List({ pageId }) {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItems(pageId).then(setItems);
  }, [pageId]);

  return items[pageId].map((item) => <li>{item}</li>);
}

// version 3
function List({ pageId }) {
  const [items, isLoading] = useData(pageId);

  if (isLoading) {
    return <Spinner />;
  }

  return items[pageId].map((item) => <li>{item}</li>);
}

// version 4

function List({ pageId }) {
  const items = useData(pageId);

  return items[pageId].map((item) => <li>{item}</li>);
}

// Suspense Patterns
const Page1 = (
  <Suspense fallback={<Spinner />}>
    <List pageId={pageId} />
  </Suspense>
);

const Page2 = (
  <Suspense fallback={<Skeleton />}>
    <Header />
    <List pageId={pageId} />
  </Suspense>
);

const Page3 = (
  <Suspense fallback={<Skeleton />}>
    <Header />
    <Suspense fallback={<ListPlaceHolder />}>
      <List pageId={pageId} />
    </Suspense>
  </Suspense>
);
