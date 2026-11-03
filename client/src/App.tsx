import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Glossary from "./pages/Glossary";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import LessonPage from "./pages/LessonPage";
import NotFound from "./pages/NotFound";
import ScientistPage from "./pages/ScientistPage";
import Scientists from "./pages/Scientists";
import Settings from "./pages/Settings";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/learn" component={Learn} />
    <Route path="/learn/:slug" component={LessonPage} />
    <Route path="/scientists" component={Scientists} />
    <Route path="/scientists/:slug" component={ScientistPage} />
    <Route path="/glossary" component={Glossary} />
    <Route path="/settings" component={Settings} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
