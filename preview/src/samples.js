export const leftSamples = {
  dart: `// KONNG Theme - Flutter/Dart Preview
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'KONNG Theme',
      theme: ThemeData(
        colorScheme: ColorScheme.dark(
          primary: const Color(0xFF9370DB),
          surface: const Color(0xFF211d25),
        ),
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _counter = 0;

  void _increment() {
    setState(() => _counter++);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('KONNG')),
      body: Center(
        child: Text(
          'Count: \$_counter',
          style: Theme.of(context).textTheme.headlineMedium,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}`,

  rust: `// KONNG Theme - Rust Preview
use std::collections::HashMap;
use std::sync::Arc;

#[derive(Debug, Clone)]
pub struct User {
    pub id: u64,
    pub name: String,
    pub email: Option<String>,
}

impl User {
    pub fn new(id: u64, name: &str) -> Self {
        Self {
            id,
            name: name.to_string(),
            email: None,
        }
    }

    pub fn with_email(mut self, email: &str) -> Self {
        self.email = Some(email.to_string());
        self
    }
}

pub trait Repository<T> {
    fn find(&self, id: u64) -> Option<&T>;
    fn save(&mut self, item: T) -> Result<(), String>;
}

pub struct UserRepo {
    data: HashMap<u64, User>,
}

impl Repository<User> for UserRepo {
    fn find(&self, id: u64) -> Option<&User> {
        self.data.get(&id)
    }

    fn save(&mut self, user: User) -> Result<(), String> {
        self.data.insert(user.id, user);
        Ok(())
    }
}

async fn fetch_user(id: u64) -> Result<User, Box<dyn std::error::Error>> {
    let user = User::new(id, "John").with_email("john@example.com");
    Ok(user)
}`,

  go: `// KONNG Theme - Go Preview
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type User struct {
	ID        int64     \`json:"id"\`
	Name      string    \`json:"name"\`
	Email     string    \`json:"email"\`
	CreatedAt time.Time \`json:"created_at"\`
}

type UserService interface {
	GetUser(ctx context.Context, id int64) (*User, error)
	CreateUser(ctx context.Context, user *User) error
}

type userHandler struct {
	service UserService
}

func (h *userHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		user, err := h.service.GetUser(r.Context(), 1)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(user)
	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "OK")
	})

	server := &http.Server{
		Addr:         ":8080",
		Handler:      mux,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	fmt.Println("Server starting on :8080")
	server.ListenAndServe()
}`,

  cpp: `// KONNG Theme - C++ Preview
#include <iostream>
#include <vector>
#include <memory>
#include <string>
#include <algorithm>

namespace lesser {

template<typename T>
class Repository {
public:
    virtual ~Repository() = default;
    virtual T* find(int id) = 0;
    virtual void save(T item) = 0;
};

struct User {
    int id;
    std::string name;
    std::string email;

    User(int id, std::string name)
        : id(id), name(std::move(name)) {}
};

class UserRepository : public Repository<User> {
private:
    std::vector<User> users_;

public:
    User* find(int id) override {
        auto it = std::find_if(users_.begin(), users_.end(),
            [id](const User& u) { return u.id == id; });
        return it != users_.end() ? &(*it) : nullptr;
    }

    void save(User user) override {
        users_.push_back(std::move(user));
    }

    size_t count() const { return users_.size(); }
};

} // namespace lesser

int main() {
    auto repo = std::make_unique<lesser::UserRepository>();
    
    repo->save(lesser::User{1, "Alice"});
    repo->save(lesser::User{2, "Bob"});

    if (auto* user = repo->find(1)) {
        std::cout << "Found: " << user->name << std::endl;
    }

    return 0;
}`,

  python: `# KONNG Theme - Python Preview
from dataclasses import dataclass
from typing import Optional, List, Generic, TypeVar
from abc import ABC, abstractmethod
import asyncio

T = TypeVar('T')

@dataclass
class User:
    id: int
    name: str
    email: Optional[str] = None
    is_active: bool = True

class Repository(ABC, Generic[T]):
    @abstractmethod
    async def find(self, id: int) -> Optional[T]:
        pass

    @abstractmethod
    async def save(self, item: T) -> None:
        pass

class UserRepository(Repository[User]):
    def __init__(self):
        self._data: dict[int, User] = {}

    async def find(self, id: int) -> Optional[User]:
        await asyncio.sleep(0.01)  # Simulate IO
        return self._data.get(id)

    async def save(self, user: User) -> None:
        self._data[user.id] = user

    def get_active_users(self) -> List[User]:
        return [u for u in self._data.values() if u.is_active]

async def main():
    repo = UserRepository()
    
    users = [
        User(1, "Alice", "alice@example.com"),
        User(2, "Bob", is_active=False),
    ]
    
    for user in users:
        await repo.save(user)
    
    active = repo.get_active_users()
    print(f"Active users: {len(active)}")

if __name__ == "__main__":
    asyncio.run(main())`,
}

export const rightSamples = {
  typescript: `// KONNG Theme - TypeScript Preview
interface User {
  id: number
  name: string
  email?: string
  role: 'admin' | 'user' | 'guest'
}

type ApiResponse<T> = {
  data: T
  status: number
  message?: string
}

abstract class Repository<T> {
  protected cache = new Map<number, T>()

  abstract find(id: number): Promise<T | null>
  abstract save(item: T): Promise<void>
}

class UserService extends Repository<User> {
  constructor(private baseUrl: string) {
    super()
  }

  async find(id: number): Promise<User | null> {
    if (this.cache.has(id)) {
      return this.cache.get(id)!
    }

    const response = await fetch(\`\${this.baseUrl}/users/\${id}\`)
    const { data } = await response.json() as ApiResponse<User>
    
    this.cache.set(id, data)
    return data
  }

  async save(user: User): Promise<void> {
    await fetch(\`\${this.baseUrl}/users\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
  }
}

const service = new UserService('https://api.example.com')`,

  javascript: `// KONNG Theme - JavaScript Preview
import { useState, useEffect, useCallback } from 'react'

const API_URL = 'https://api.example.com'

async function fetchData(endpoint) {
  const response = await fetch(\`\${API_URL}/\${endpoint}\`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export function useUser(userId) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const data = await fetchData(\`users/\${userId}\`)
      setUser(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { user, loading, error, refresh }
}

export default function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId)

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="profile">
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  )
}`,

  html: `<!-- KONNG Theme - HTML Preview -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KONNG Theme</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav id="main-nav" aria-label="Main navigation">
      <a href="/" class="logo">KONNG</a>
      <ul class="nav-links">
        <li><a href="/features">Features</a></li>
        <li><a href="/docs">Documentation</a></li>
        <li><a href="/download">Download</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>A Pure Colorful Dark Theme</h1>
      <p>Beautiful syntax highlighting for your code.</p>
      <div class="cta-buttons">
        <button type="button" class="btn primary">
          Install Now
        </button>
        <a href="/preview" class="btn secondary">
          Live Preview
        </a>
      </div>
    </section>

    <section class="features" id="features">
      <article class="feature-card">
        <h2>Colorful</h2>
        <p>Vibrant colors that are easy on the eyes.</p>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 KONNG Theme</p>
  </footer>
</body>
</html>`,

  css: `/* KONNG Theme - CSS Preview */
:root {
  --bg-primary: #211d25;
  --bg-secondary: #2a2530;
  --text-primary: #abb2bf;
  --text-secondary: #636d83;
  --accent: #9370DB;
  --success: #80FFB5;
  --error: #FF8080;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin-inline: auto;
  padding: 2rem;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(147, 112, 219, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}`,

  json: `{
  "name": "konng-theme",
  "displayName": "KONNG",
  "description": "🌈 A Pure Colorful Dark Theme",
  "version": "1.0.0",
  "publisher": "OvO",
  "license": "MIT",
  "categories": ["Themes"],
  "keywords": ["theme", "dark", "colorful", "syntax"],
  "engines": {
    "vscode": "^1.80.0"
  },
  "contributes": {
    "themes": [
      {
        "label": "KONNG",
        "uiTheme": "vs-dark",
        "path": "./themes/lesser.json"
      }
    ]
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/funcdfs/vscode-theme-lesser"
  },
  "bugs": {
    "url": "https://github.com/funcdfs/vscode-theme-lesser/issues"
  },
  "scripts": {
    "package": "vsce package",
    "publish": "vsce publish"
  }
}`,
}
