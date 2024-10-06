import { Validation } from '../src/validation';
import * as assert from 'assert';

describe('Validation', function () {
    describe('#validateBookInput()', function () {
        it('should return true for valid book input', function () {
            const result = Validation.validateBookInput('Book Title', 'Author Name', 2022);
            assert.strictEqual(result, true);
        });

        it('should return false for empty title', function () {
            const result = Validation.validateBookInput('', 'Author Name', 2022);
            assert.strictEqual(result, false);
        });

        it('should return false for empty author', function () {
            const result = Validation.validateBookInput('Book Title', '', 2022);
            assert.strictEqual(result, false);
        });

        it('should return false for year before 0', function () {
            const result = Validation.validateBookInput('Book Title', 'Author Name', -1);
            assert.strictEqual(result, false);
        });

        it('should return false for year after 2024', function () {
            const result = Validation.validateBookInput('Book Title', 'Author Name', 2025);
            assert.strictEqual(result, false);
        });
    });

    describe('#validateUserInput()', function () {
        it('should return true for valid user input', function () {
            const result = Validation.validateUserInput('User Name', 'user@example.com');
            assert.strictEqual(result, true);
        });

        it('should return false for empty name', function () {
            const result = Validation.validateUserInput('', 'user@example.com');
            assert.strictEqual(result, false);
        });

        it('should return false for invalid email', function () {
            const result = Validation.validateUserInput('User Name', 'invalid-email');
            assert.strictEqual(result, false);
        });
    });
});