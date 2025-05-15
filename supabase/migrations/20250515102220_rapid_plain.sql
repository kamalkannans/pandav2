/*
  # Create shows table and related policies

  1. New Tables
    - `shows`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `title` (text)
      - `scheduled_for` (timestamptz)
      - `status` (text)
      - `guests` (text[])
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on shows table
    - Add policies for CRUD operations
*/

CREATE TABLE IF NOT EXISTS shows (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  scheduled_for timestamptz NOT NULL,
  status text NOT NULL CHECK (status IN ('scheduled', 'live', 'completed')),
  guests text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE shows ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to read their own shows
CREATE POLICY "Users can read own shows"
  ON shows
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy to allow users to insert their own shows
CREATE POLICY "Users can insert own shows"
  ON shows
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy to allow users to update their own shows
CREATE POLICY "Users can update own shows"
  ON shows
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy to allow users to delete their own shows
CREATE POLICY "Users can delete own shows"
  ON shows
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);